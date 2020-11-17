# Make a PFF Detox build

1. Clone Repo

    `git clone `git@github.com:stevesuyao/Detox.git`

2. Switch to `pff` branch

  `git checkout pff`

3. Update git submodules

  `cd Detox && git submodule init && git submodule update`

4. Build Android Lib

  `cd Detox && rm -rf detox/Detox-android/*`

   `RELEASE_VERSION_TYPE=x.x.x-pff yarn package:android`

   Running this will build android aar files in `Detox-android` folder with verison `x.x.x-pff`

5. Pack ios lib

    `yarn package:ios`

    or `cd detox && ./scripts/pack_ios.sh`

    Running this will generate `Detox-ios-src.tbz` and `Detox-ios.tbz` files in `detox` folder.

6. git commit and push changes to `pff` branch.


The above steps will make `pff` branch installable.
