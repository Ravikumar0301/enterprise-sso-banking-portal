package com.ravi.banking.controller;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ravi.banking.dto.ProfileResponse;

@RestController
public class ProfileController {

    @GetMapping("/api/profile")
    public ProfileResponse getProfile(Authentication authentication) {

        Jwt jwt = (Jwt) authentication.getPrincipal();

        List<String> roles =
                jwt.getClaimAsStringList("roles");

        return new ProfileResponse(
                jwt.getClaimAsString("preferred_username"),
                jwt.getClaimAsString("email"),
                jwt.getClaimAsString("given_name"),
                jwt.getClaimAsString("family_name"),
                roles
        );
    }
}