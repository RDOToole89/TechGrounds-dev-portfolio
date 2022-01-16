// Basically what React does is take two trees and produces the difference between those trees
// Accept on the first render because there is nothing to compare it to.

// In Web Dev we have the Virtual Dom and in Native the Shadow Tree (sort of)
// The concept is the same in that React is responsible for managing the differences between states
// and does this by comparing tree like achitectures.

// React Native is different from React web in that it doesn't support HTML and CSS.
// React Native compiles the views to Native platform components and seperates the
// business logic from UI logic. It then updates the native views through the so called
// React bridge, which is an API that sends updates to the business logic in the form
// of JSON asynchronously to the Native platforms views. Because the bridge can get congested
// this can cause performance issues.

// Current React Native Architecture

// https://collectivemind.dev/blog/react-native-re-architecture

// A native app consists of three threads. The JS thread, MAIN / UI thread and the Shadow thread.
// Every native app ships with a JavaScript engine which communicates with the native components
// throught the bridge.

// * The Main thread is the on our React Native application runs (Android or IOS) its the only thread that
// can make updates to the UI

// * The Shadow thread is a background thread which executes operations from the JavaScript thread. This
// is where the layout of the app is calculated and passed to the app's interface.

// * The JavaScript thread is the thread used for handling all of the logic of our app and executing
// all our JavaScript and React code.

// The JS thread and the Main thread do not directly communicate and effectively work by send asynchronous
// JSON messages. The JS thread uses the bridge to transfer data to the shadow three by serializing it to
// JSON and sending it as a string. This also happens when sending data from the Shadow Thread to the Main
// thread.
