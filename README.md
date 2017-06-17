# Demo 

## Prerequisites
 1. `node@4` and above, `npm@3` and above

### iOS 
 1. install xcode and simulator as needed (demo is using iOS@10.2 and iPhone 7 simulator)
 2. unzip `xxx.app` from `xxx.ipa`
 
### Android
 1. install android SKD
 2. setup `${ANDROID_HOME}`
 3. setup AVD 
 4. get `xxxxx.apk`

## How to run 
 ```
 1. git clone git@github.com:archlichking/kezhiyin.git
 2. cd kezhiyin
 3. npm install
 4. mkdir app
 ```
### iOS
 ```
 1. mv xxx.app app/kezhiyin.app
 2. npm run test:ios
 ```

### Android
 ```
 1. mv xxxxx.apk app/kezhiyin.apk
 2. AVD_NAME=yyyyyy npm run android:launch
 3. npm run test:android
 ```