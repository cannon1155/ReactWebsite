/* Copyright (C) 2017 Daniel Page <csdsp@bristol.ac.uk>
 *
 * Use of this source code is restricted per the CC BY-NC-ND license, a copy of
 * which can be found via http://creativecommons.org (and should be included as
 * LICENSE.txt within the associated archive or repository).
 */

#include "PDP.h"

extern void     main_PT();
extern uint32_t tos_PT;

void main_PDP() {
  int i;
  forkItem* forkList;
  //allocates space for the fork items
  forkList = (forkItem*) malloc(sizeof(forkItem)*16);
  //initate all forks
  for (i=0;i<16;i++){
    forkItem fork;
    fork.pickedUp = false;
    fork.betweenLow = 0;
    fork.betweenHigh = 0;
    fork.owndedBy = 0;
    fork.forkNumber = i;
    forkList[i] = fork;
  }
  //gets the pid of this process
  int pidValue = pid();
  static int result = 1;
  //initates all 16 threads
  for(i=0;i<16;i++){

      if (fork() == 0){
          exec(&main_PT);

    }
    //makes use of simplication that no other processes will be started while setup is being completed
    //dangerous

    //complete setup for that process
    while (1){


      //sends a value as long as it is able to recieve a value
      if ((bool)send((pidValue+i+1),&forkList[i]) == false){
        //if it didnt recieve then yeild to let another process execute but let this one have a
        //higher priorty
        yield();
      }
      else{
        //if it recieved break and go back to forking
        break;
      }
    }



  }
  while( 1 ) {
    //any managment code should have been here
  }
  exit( EXIT_SUCCESS );
}
