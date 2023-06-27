package preproject.server.config.config;

import preproject.server.auth.filter.JwtAuthenticationFilter;
import preproject.server.auth.filter.JwtVerificationFilter;
import preproject.server.auth.handler.MemberAccessDeniedHandler;
import preproject.server.auth.handler.MemberAuthenticationEntryPoint;
import preproject.server.auth.handler.MemberAuthenticationFailureHandler;
import preproject.server.auth.handler.MemberAuthenticationSuccessHandler;
import preproject.server.auth.jwt.JwtTokenizer;
import preproject.server.auth.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

/**
 * authenticationEntryPoint와 accessDeniedHandler 추가
 */
@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils; // 추가

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .headers().frameOptions().sameOrigin()
            .and()
            .csrf().disable()
//            .cors(withDefaults())
//            .cors().and()
            .cors()
            .configurationSource(corsConfigurationSource())

            .and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .formLogin().disable()
            .httpBasic().disable()
            .exceptionHandling()
            .authenticationEntryPoint(new MemberAuthenticationEntryPoint())  // 추가
            .accessDeniedHandler(new MemberAccessDeniedHandler())            // 추가
            .and()
            .apply(new CustomFilterConfigurer())
            .and()
            .authorizeHttpRequests(authorize -> authorize
                    .antMatchers(HttpMethod.POST, "/members").permitAll()
                    .antMatchers(HttpMethod.PATCH, "/members/**").hasRole("USER")
                    .antMatchers(HttpMethod.GET, "/members").hasAnyRole("USER", "ADMIN")
                    .antMatchers(HttpMethod.GET, "/members/**").hasAnyRole("USER", "ADMIN")
                    .antMatchers(HttpMethod.DELETE, "/members/**").hasRole("USER")

//                    .antMatchers(HttpMethod.GET, "/questions/**").hasAnyRole("USER", "ADMIN")
                    .antMatchers(HttpMethod.GET, "/questions**").permitAll()
                    .antMatchers(HttpMethod.GET, "/questions/**").hasAnyRole("USER", "ADMIN")
                    .antMatchers(HttpMethod.POST, "/questions").hasRole("USER")
                    .antMatchers(HttpMethod.PATCH, "/questions/**").hasRole("USER")
                    .antMatchers(HttpMethod.DELETE, "/questions/**").hasRole("USER")

                    .antMatchers(HttpMethod.POST, "/answers").hasRole("USER")
                    .antMatchers(HttpMethod.PATCH, "/answers/**").hasRole("USER")
                    .antMatchers(HttpMethod.GET, "/answers").hasAnyRole("USER", "ADMIN")
                    .antMatchers(HttpMethod.GET, "/answers/**").hasAnyRole("USER", "ADMIN")
                    .antMatchers(HttpMethod.DELETE, "/answers/**").hasRole("USER")
                    .anyRequest().permitAll()
            );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOriginPattern("*");
        corsConfiguration.addAllowedOriginPattern("http://whatmerge-bucket.s3-website.ap-northeast-2.amazonaws.com");
        corsConfiguration.addAllowedOriginPattern("https://d1ezuold66jmq2.cloudfront.net");
        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.addExposedHeader("Authorization");
        corsConfiguration.addExposedHeader("RefreshToken");
        corsConfiguration.setAllowCredentials(true);

        corsConfiguration.setMaxAge(3600L);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);
        return source;
    }

//    @Bean
//    CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(Arrays.asList("*"));
//        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }

//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration corsConfiguration = new CorsConfiguration();
//        corsConfiguration.setAllowedOrigins(Arrays.asList("*"));
//        corsConfiguration.setAllowedMethods(Arrays.asList("POST", "PATCH", "GET", "DELETE", "OPTIONS"));
//        corsConfiguration.setAllowedHeaders(Arrays.asList("*"));
//        corsConfiguration.setExposedHeaders(Arrays.asList("*"));
//        corsConfiguration.addAllowedHeader("*");
//        corsConfiguration.setAllowCredentials(false);
//
//        corsConfiguration.setMaxAge(3600L);
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", corsConfiguration);
//        return source;
//    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/auth/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);


            builder
                .addFilter(jwtAuthenticationFilter)
                .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
