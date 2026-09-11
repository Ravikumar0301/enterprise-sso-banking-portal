package com.ravi.banking.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ravi.banking.dto.CaseResponse;
import com.ravi.banking.service.CaseService;

@RestController
public class CaseController {

    private final CaseService caseService;

    public CaseController(CaseService caseService) {
        this.caseService = caseService;
    }

    @GetMapping("/api/cases")
    public List<CaseResponse> getCases() {
        return caseService.getAllCases();
    }

    @GetMapping("/api/cases/{caseId}")
    public CaseResponse getCaseById(@PathVariable String caseId) {
        return caseService.getCaseById(caseId);
    }
}
