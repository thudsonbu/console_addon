
#include <iostream>
#include <nan.h>
using namespace v8;

NAN_METHOD(cSpeed)
{
  int count = 0;
  for (int i = 0; i < 1000000; i++)
  {
    count = i;
  }

  std::cout << "cSpeed\n";
}

NAN_MODULE_INIT(init)
{
  Nan::SetMethod(target, "cSpeed", cSpeed);
}

NODE_MODULE(cSpeed, init);