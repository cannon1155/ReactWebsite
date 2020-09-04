/* Copyright (C) 2017 Daniel Page <csdsp@bristol.ac.uk>
 *
 * Use of this source code is restricted per the CC BY-NC-ND license, a copy of
 * which can be found via http://creativecommons.org (and should be included as
 * LICENSE.txt within the associated archive or repository).
 */

#ifndef __PDP_H
#define __PDP_H

#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>

#include "libc.h"

//defines an item called a fork that is meant to be able to be picked up and put down
typedef struct{
  bool pickedUp;
  int betweenLow;
  int betweenHigh;
  int owndedBy;
  int forkNumber;
} forkItem;

//defines an struct called a person that is meant to be represented by one of the 16 threads
typedef struct{
  int personNumber;
  bool hasLeftFork;
  bool hasRightFork;
  bool eating;
  int forkNumberLeft;
  int forkNumberRight;
} person;

#endif
