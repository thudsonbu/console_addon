{
  "targets": [
    {
      "target_name": "cSpeed",
      "sources": [ "src/cSpeed.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    },
    {
      "target_name": "hello",
      "sources": [ "src/hello.cc" ],
    }
  ]
}