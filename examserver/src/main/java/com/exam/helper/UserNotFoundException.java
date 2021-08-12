package com.exam.helper;

public class UserNotFoundException extends Exception{
    public UserNotFoundException() {
        super("User with this username not found is database");
    }

    public UserNotFoundException(String msg) { super(msg); }
}
