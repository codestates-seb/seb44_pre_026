package preproject.server.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MultiResponseDto<T> {
    private List<T> data;

    public MultiResponseDto(List<T> data) {
        this.data = data;
    }
}
