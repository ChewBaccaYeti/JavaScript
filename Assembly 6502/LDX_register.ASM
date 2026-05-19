; read the value of 4080 bite 
; compare X register to its value
; if it's equal === 7 then { write $AA to $40BF }
; otherwise/else { write $EE to $40BF }

LDX $4080
CPX #7

BEQ @equal
BNE @notequal
  @notequal:
LDX #$AA
STX $40BF
  BRK
  @equal:
LDX #$EE
STX $40BF
