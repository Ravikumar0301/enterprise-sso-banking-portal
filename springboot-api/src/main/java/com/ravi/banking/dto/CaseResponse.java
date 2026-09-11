package com.ravi.banking.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CaseResponse {

    private String caseId;

    private String customerName;

    private String accountNumber;

    private String type;

    private String status;

    private String priority;
}