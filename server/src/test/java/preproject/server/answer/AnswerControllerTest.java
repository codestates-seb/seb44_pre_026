package preproject.server.answer;

import com.google.gson.Gson;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;
import preproject.server.answer.controller.AnswerController;
import preproject.server.answer.dto.AnswerDto;
import preproject.server.answer.entity.Answer;
import preproject.server.answer.mapper.AnswerMapper;
import preproject.server.answer.service.AnswerService;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static preproject.server.utils.ApiDocumentUtils.getRequestPreProcessor;
import static preproject.server.utils.ApiDocumentUtils.getResponsePreProcessor;


@Transactional
@WebMvcTest(AnswerController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class AnswerControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AnswerService answerService;

    @MockBean
    private AnswerMapper mapper;

    @Autowired
    private Gson gson;

    @Test
    public void getAnswerTest() throws Exception {
        // given
        long AnswerId = 1L;
        LocalDateTime dateTime = LocalDateTime.of(2023, 6, 19, 10, 30, 0);
        Answer Answer = new Answer(1L,"답변 테스트입니다");

        AnswerDto.Response response = new AnswerDto.Response(response.setAnswerId(1L),
                1L,
                1L,
                "답변 테스트입니다",
                dateTime,
                dateTime
               );

        // Stubbing by Mockito
        given(AnswerService.findAnswer(Mockito.anyLong())).willReturn(new Answer());
        given(mapper.answerToAnswerResponse(Mockito.any(Answer.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                //org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders
                RestDocumentationRequestBuilders.get("/answers/{Answer-id}", AnswerId)
                        .contentType(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.data.email").value(Answer.getEmail()))
                .andExpect(jsonPath("$.data.name").value(Answer.getName()))
                .andExpect(jsonPath("$.data.phone").value(Answer.getPhone()))
                .andDo(document("get-Answer",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("Answer-id").description("회원 식별자")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터"),
                                        fieldWithPath("data.AnswerId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("data.email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("data.name").type(JsonFieldType.STRING).description("이름"),
                                        fieldWithPath("data.phone").type(JsonFieldType.STRING).description("휴대폰 번호"),
                                        fieldWithPath("data.AnswerStatus").type(JsonFieldType.STRING).description("회원 상태: 활동중 / 휴면 상태 / 탈퇴 상태"),
                                        fieldWithPath("data.stamp").type(JsonFieldType.NUMBER).description("스탬프 갯수")
                                )
                        )
                ));
    }

    @Test
    public void getAnswersTest() throws Exception {
        // TODO 여기에 AnswerController의 getAnswers() 핸들러 메서드 API 스펙 정보를 포함하는 테스트 케이스를 작성 하세요.
        // given
        Answer Answer1 = new Answer("hgd1@gmail.com", "홍길동1", "010-1111-1111");
        Answer1.setAnswerStatus(Answer.AnswerStatus.Answer_ACTIVE);
        Answer1.setStamp(new Stamp());

        Answer Answer2 = new Answer("hgd2@gmail.com", "홍길동2", "010-2222-2222");
        Answer2.setAnswerStatus(Answer.AnswerStatus.Answer_ACTIVE);
        Answer2.setStamp(new Stamp());

        Page<Answer> pageAnswers =
                new PageImpl<>(List.of(Answer1, Answer2),
                        PageRequest.of(0, 10,
                                Sort.by("AnswerId").descending()), 2);

        List<AnswerDto.Response> responses = List.of(
                new AnswerDto.Response(1L,
                        "hgd1@gmail.com",
                        "홍길동1",
                        "010-1111-1111",
                        Answer.AnswerStatus.Answer_ACTIVE,
                        new Stamp()),
                new AnswerDto.Response(2L,
                        "hgd2@gmail.com",
                        "홍길동2",
                        "010-2222-2222",
                        Answer.AnswerStatus.Answer_ACTIVE,
                        new Stamp())
        );

        /*// Stubbing by Mockito
         *
         * AnswerService.findAnswers(Mockito.anyInt(), Mockito.anyInt())에서 리턴하는 리턴 값은 AnswerController의
         * getAnswers() 핸들러 메서드의 로직 중에서 다음 라인의 로직(List<Answer> Answers = pageAnswers.getContent();)에서
         * 사용되기 때문에 구체적인 값이 포함된 객체(pageAnswers)를 지정해야 한다.*/

        given(AnswerService.findAnswers(Mockito.anyInt(), Mockito.anyInt())).willReturn(pageAnswers);
        given(mapper.AnswersToAnswerResponses(Mockito.anyList())).willReturn(responses);

        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();

        URI uri = UriComponentsBuilder.newInstance().path("/answers").build().toUri();

        // when
        ResultActions actions = mockMvc.perform(
                get(uri)
                        .params(
                                queryParams
                        )
                        .accept(MediaType.APPLICATION_JSON));

        // then
        MvcResult result = actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data").isArray())
                .andDo(document("get-Answers",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestParameters(
                                parameterWithName("page").description("페이지 수"),
                                parameterWithName("size").description("페이지 크기")
                        ),
                        responseFields(
                                fieldWithPath("data").type(JsonFieldType.ARRAY).description("결과 데이터"),
                                fieldWithPath("data.[].AnswerId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                fieldWithPath("data.[].email").type(JsonFieldType.STRING).description("이메일"),
                                fieldWithPath("data[].name").type(JsonFieldType.STRING).description("이름"),
                                fieldWithPath("data[].phone").type(JsonFieldType.STRING).description("휴대폰 번호"),
                                fieldWithPath("data[].AnswerStatus").type(JsonFieldType.STRING).description("회원 상태: 활동중 / 휴면 상태 / 탈퇴 상태"),
                                fieldWithPath("data[].stamp").type(JsonFieldType.NUMBER).description("스탬프 갯수"),
                                fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("페이지 수"),
                                fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("페이지 크기"),
                                fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("총 데이터 수"),
                                fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("총 페이지 수")
                        )))
                .andReturn();

        List list = JsonPath.parse(result.getResponse().getContentAsString()).read("$.data");

        assertThat(list.size(), is(2));
    }

    @Test
    public void deleteAnswerTest() throws Exception {
        // given
        long AnswerId = 1L;

        // Stubbing by Mockito
        doNothing().when(AnswerService).deleteAnswer(AnswerId);

        // when
//        ResultActions actions = mockMvc.perform(RestDocumentationRequestBuilders.delete("/v11/Answers/" + AnswerId));
        ResultActions actions = mockMvc.perform(RestDocumentationRequestBuilders.delete("/v11/Answers/{Answer-id}", AnswerId));

        // then
        actions.andExpect(status().isNoContent())
                .andDo(document("delete-Answer",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("Answer-id").description("회원 식별자")
                        )
                ));
    }

}
