# Make a PFF Detox build

1. Clone Repo

    `git clone `git@github.com:stevesuyao/Detox.git`

2. Switch to `pff` branch

  `git checkout pff`

3. Update git submodules

  `cd Detox && git submodule init && git submodule update`

4. Build Android Lib

  `rm -f /detox/Detox-android/*`

   `RELEASE_VERSION_TYPE=x.x.x-pff yarn package:android`

   Running this will build android aar files in `Detox-android` folder with verison `x.x.x-pff`
5. Build ios lib

    `yarn package:ios`

6. git commit and push changes to `pff` branch.


The above steps will make `pff` branch installable.
