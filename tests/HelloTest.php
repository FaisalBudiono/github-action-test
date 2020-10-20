<?php

use App\Hello;
use PHPUnit\Framework\TestCase;

class HelloTest extends TestCase
{
    public function test_output_with_name_argument()
    {
        $this->assertSame("Hello ucul", Hello::say("ucul"));
    }

    public function test_output_without_name_argument()
    {
        $this->assertSame("Hello stranger... but who are you", Hello::say());
    }
}
