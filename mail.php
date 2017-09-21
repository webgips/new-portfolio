<?php
if($_POST)
    {
        $to = "webgips@gmail.com";
        $from = "webgips@gmail.com";
        $subject = "Форма с сайта portfolio";
        $name = $_POST["name"];
        $description = $_POST["description"];
        $email = $_POST["email"];
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p style="font-weight: bold">Имя: '.$name.'</p>                        
                        <br>
                        <p style="font-weight: bold">Email: '.$email.'</p>  
                        <br>
                        <p style="font-weight: bold">Сообщение: '.$description.'</p> 
                    </body>
                </html>';
        $headers = "Content-type: text/html; charset=UTF-8 \r\n";
        $headers .= "From: <webgips@gmail.com>\r\n";
        $result = mail($to, $subject, $message, $headers);
		$Response = array('status' => $result);
		echo json_encode($Response);
    }
?>