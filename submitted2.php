<?php
            $email_to = "jeremywdowik@gmail.com";
            $email_subject = "CYBERDAYton Sponsor Form";
            
            $firstname = $_POST['sponsor_name'];
            $lastname = $_POST['sponsor_email'];
            $email = $_POST['sponsor_phone'];
            $phone = $_POST['sponsor_message'];

            
            $email_message = "Hey Justin, \n\n";
            
            function clean_string($string) {
              $bad = array("content-type","bcc:","to:","cc:","href");
              return str_replace($bad,"",$string);
            }
            
            $email_message .= "name: ".clean_string($firstname)."\n";
            $email_message .= "email: ".clean_string($lastname)."\n";
            $email_message .= "phone: ".clean_string($email)."\n";
            $email_message .= "message: ".clean_string($phone)."\n";

            $headers = "From: ".$firstname." ".$lastname."\r\n".
            "Reply-To: ".$email."\r\n" .
            "X-Mailer: PHP/".phpversion();
            @mail($email_to, $email_subject, $email_message, $headers);  
        ?>