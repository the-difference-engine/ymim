import sendgrid
import os
from sendgrid.helpers.mail import *

sg = sendgrid.SendGridAPIClient('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')
from_email = Email("scott@scott-gall.com")
to_email = Email("scottarthurgall@gmail.com")
subject = "Checking in"
content = Content("text/plain", "hello")
mail = Mail(from_email, subject, to_email, content)
response = sg.client.mail.send.post(request_body=mail.get())

print(response.status_code)
print(response.body)
print(response.headers)