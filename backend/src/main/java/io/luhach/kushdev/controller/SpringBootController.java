package io.luhach.kushdev.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api")
public class SpringBootController {

    private static final Logger LOG = LoggerFactory.getLogger(SpringBootController.class);
    public static final String HELLO_TEXT = "Hurray !!! Hello from Spring Boot Backend!";

    @RequestMapping(path = "/hello")
    public @ResponseBody String sayHello() {
        LOG.info("GET called on /hello resource");
        return HELLO_TEXT;
    }

}