#define sensorIR 15//Must be an analog pin
int pinNum = A0; //아날로그 0번핀 사용
float sensorValue, inches, cm;    //Must be of type float for pow()

void setup() {
  Serial.begin(9600);
  pinMode (pinNum, INPUT); //A0번핀을 INPUT으로 설정
}

void loop() {
  sensorValue = analogRead(pinNum);
  //inches = 4192.936 * pow(sensorValue,-0.935) - 3.937;  
  cm = 10650.08 * pow(sensorValue,-0.935) - 10;
  delay(100);
  Serial.print("cm: ");
  Serial.println(cm);
}