package preproject.server.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import preproject.server.dto.SingleResponseDto;
import preproject.server.question.dto.QuestionDto;
import preproject.server.question.dto.QuestionResponseDto;
import preproject.server.question.entity.Question;
import preproject.server.question.mapper.QuestionMapper;
import preproject.server.question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/questions")
@Validated
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.QuestionPostDto questionPostDto) {
        Question question = mapper.questionPostDtoToQuestion(questionPostDto);
        Question createQuestion = questionService.createQuestion(question);
        QuestionResponseDto responseDto = mapper.questionToQuestionResponseDto(createQuestion);
        return new ResponseEntity(responseDto, HttpStatus.CREATED);
    }
    @PatchMapping("/{question_id}")
    public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive long questionId,
                                        @Valid @RequestBody QuestionDto.QuestionPatchDto questionPatchDto) {
        Question question = mapper.questionPatchDtoToQuestion(questionPatchDto);
        question.setQuestionId(questionId);
        Question editedQuestion = questionService.updateQuestion(question);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(editedQuestion)), HttpStatus.OK
        );
    }

    @GetMapping("/{question_id}")
    public ResponseEntity getQuestion(@PathVariable("question_id") @Positive long questionId) {
        Question question = questionService.getQuestion(questionId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK
        );
    }


    @DeleteMapping("/{question_id}")
    public ResponseEntity deleteQuestion(@PathVariable("question_id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}