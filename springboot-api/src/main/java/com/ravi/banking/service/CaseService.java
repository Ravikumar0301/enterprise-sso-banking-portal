package com.ravi.banking.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ravi.banking.dto.CaseResponse;

@Service
public class CaseService {

    public List<CaseResponse> getAllCases() {

        return List.of(
                new CaseResponse(
                        "CASE10001",
                        "Ravi Kumar",
                        "XXXX5678",
                        "KYC Verification",
                        "Pending",
                        "High"
                ),
                new CaseResponse(
                        "CASE10002",
                        "Priya Sharma",
                        "XXXX9988",
                        "Credit Card Application",
                        "Approved",
                        "Medium"
                ),
                new CaseResponse(
                        "CASE10003",
                        "Arjun Singh",
                        "XXXX1122",
                        "Savings Account Opening",
                        "In Review",
                        "Low"
                )
        );
    }

    public CaseResponse getCaseById(String caseId) {

        return getAllCases()
                .stream()
                .filter(c -> c.getCaseId().equals(caseId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Case not found"));
    }
}
