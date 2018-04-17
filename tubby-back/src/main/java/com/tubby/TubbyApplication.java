package com.tubby;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin()
public class TubbyApplication {
	public static void main(String... args) {
		ApplicationContext ctx = SpringApplication.run(TubbyApplication.class, args);
		String[] beanNames = ctx.getBeanDefinitionNames();

		Arrays.stream(beanNames).sorted().forEach(System.out::println);
	}
}
