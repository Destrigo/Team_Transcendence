package com.team_transcendence.rest_api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

@RestController
public class HealthCheckController {

	@GetMapping("/status")
	public Mono<String> checkStatus() {
		return Mono.just("Backend is running!");
	}

}
