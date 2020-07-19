FROM httpd:2.4
COPY ./my-app/build/ /usr/local/apache2/htdocs/