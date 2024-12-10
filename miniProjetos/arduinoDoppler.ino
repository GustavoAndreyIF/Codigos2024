#include <stdio.h>

int trigger = 10;
int echo = 9;
int r = 5;
int b = 6;

unsigned long lecho;

float dist;

void setup(){

pinMode(r, OUTPUT);
pinMode (b, OUTPUT);

Serial.begin(9600);

pinMode(trigger, OUTPUT);
pinMode(echo, INPUT);

digitalWrite(r, LOW);
digitalWrite(b,LOW);
digitalWrite(trigger, LOW);
digitalWrite(echo, LOW);
}

float red, blue;

void loop(){
pulsoTrig();
lecho = pulseIn(echo, HIGH);

dist = lecho/58.82;
dist = (dist<4)? 0:dist;
dist = (dist>30)? 30:dist;

red = (dist>30)? 255: (dist/30.)*255;

analogWrite(r, red);

blue = (dist>30)? 0:255-(dist/30.)*255;

analogWrite(b,blue);

}

void pulsoTrig(){
digitalWrite(trigger, HIGH);
delayMicroseconds(10);
digitalWrite(trigger, LOW);
}
