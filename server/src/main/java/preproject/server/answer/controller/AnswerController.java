package preproject.server.answer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import preproject.server.answer.dto.AnswerDto;
import preproject.server.answer.entity.Answer;
import preproject.server.answer.mapper.AnswerMapper;
import preproject.server.answer.service.AnswerService;
import preproject.server.dto.MultiResponseDto;
import preproject.server.dto.SingleResponseDto;
import preproject.server.utils.UriCreator;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/answers")
public class AnswerController {
    private final static String  ANSWER_DEFAULT_URL = "/answers";
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid  @RequestBody AnswerDto.Post requestBody) {
        Answer answer = mapper.answerPostDtoToAnswer(requestBody);

        Answer createAnswer = answerService.createAnswer(answer);
        URI location = UriCreator.createUri(ANSWER_DEFAULT_URL, createAnswer.getAnswerId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(
            @PathVariable("answer-id") @Positive long answerId,
            @Valid @RequestBody AnswerDto.Patch requestBody) {
        requestBody.setAnswerId(answerId);
        Answer answer = mapper.answerPatchDtoToAnswer(requestBody);

        Answer updateAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponse(updateAnswer)),
                HttpStatus.OK);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(
            @PathVariable("answer-id") @Positive long answerId) {
        Answer answer = answerService.findAnswer(answerId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponse(answer))
                ,HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAnswers() {
        List<Answer> answers = answerService.findAnswers();
        List<AnswerDto.Response> response = mapper.answerToAnswerResponses(answers);
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.answerToAnswerResponses(answers))
                ,HttpStatus.OK);
    }

    @DeleteMapping("/{answerId}")
    public ResponseEntity<Void> deleteAnswer(@PathVariable long answerId) {
        answerService.deleteAnswer(answerId);
        return ResponseEntity.noContent().build();
    }
}