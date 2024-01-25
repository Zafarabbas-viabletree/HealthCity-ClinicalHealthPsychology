import { fork } from "redux-saga/effects";
import general from "./general";
import payment from "./payment";

export default function* root() {
  yield fork(general);
  yield fork(payment);
}
