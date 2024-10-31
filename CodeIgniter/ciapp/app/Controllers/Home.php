<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(): string
    {
        // $this->sendTestEmail();

        if(session("magicLogin")) {
            return redirect()->to("set-password")
                                ->with("message", "Please update your password");
        }
       
        $user = auth()->user();
        $username= $user->username ?? 'Guest';


        return view('Home/index.php', ['username' => $username]);
    }

    private function sendTestEmail(){
        $email = \Config\Services::email();

        $email->setTo("d.tsioumas@iarts.gr");

        $email->setSubject("Test Email");
        $email->setMessage("Hello from CodeIgniter");

        if($email->send()){
            echo "Email sent";
        } else{
            echo "Email not sent";
        }
    }


}
