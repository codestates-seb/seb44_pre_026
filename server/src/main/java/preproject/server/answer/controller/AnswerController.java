package preproject.server.answer.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import preproject.server.answer.dto.AnswerDto;
import preproject.server.answer.entity.Answer;
import preproject.server.answer.mapper.AnswerMapper;
import preproject.server.answer.service.AnswerService;
import preproject.server.dto.MultiResponseDto;
import preproject.server.dto.SingleResponseDto;
import preproject.server.question.entity.Question;
import preproject.server.utils.UriCreator;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/answers")
@Validated
public class AnswerController {
    //private final static String  ANSWER_DEFAULT_URL = "/answers";
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping("/{question_id}")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post requestBody,
                                     @PathVariable("question_id") @Positive long questionId) {
        Answer answer = mapper.answerPostDtoToAnswer(requestBody);
        Answer createAnswer = answerService.createAnswer(answer, questionId);
        return new ResponseEntity(mapper.answerToAnswerResponse(createAnswer), HttpStatus.CREATED);
    }

        @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerDto.Patch requestBody) {
        Answer answer = mapper.answerPatchDtoToAnswer(requestBody);
        answer.setAnswerId(answerId);
        Answer updateAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponse(updateAnswer)), HttpStatus.OK);
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
    public ResponseEntity getAnswers(@PageableDefault(page = 1, size = 15)Pageable pageable) {

        Page<Answer> pageAnswers = answerService.findAnswers(pageable);
        List<Answer> answers = pageAnswers.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.answerToAnswerResponses(answers), pageAnswers)
                ,HttpStatus.OK);
    }

    @DeleteMapping("/{answerId}")
    public ResponseEntity<Void> deleteAnswer(@PathVariable long answerId) {
        answerService.deleteAnswer(answerId);
        return ResponseEntity.noContent().build();
    }
}