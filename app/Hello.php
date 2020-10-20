<?php

namespace App;

class Hello
{
    public static function say(string $name = "")
    {
        if (empty($name)) return "Hello stranger... but who are you";

        return "Hello {$name}";
    }
}
