import { initializeApp } from 'firebase/app';
// Auth 相關
import { getAuth, connectAuthEmulator, GoogleAuthProvider, User as FirebaseAuthUser } from 'firebase/auth'; 
// 匯入所有需要的 Firestore 函式
import { 
    getFirestore, 
    connectFirestoreEmulator, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc,
    onSnapshot, 
    runTransaction, 
    collection, 
    addDoc, 
    writeBatch,
    serverTimestamp,
    query,
    where,
    getDocs
} from 'firebase/firestore'; 

// 您的 Firebase 專案配置
const firebaseConfig = {
  apiKey: "AIzaSyDeG5s2FKT5ZvowIw8tQmqvTHI3aeK2k_s",
  authDomain: "goodmoney666-jackpot.firebaseapp.com",
  projectId: "goodmoney666-jackpot",
  storageBucket: "goodmoney666-jackpot.appspot.com",
  messagingSenderId: "248630813908",
  appId: "1:248630813908:web:1e7cc138588b8dde3c8741"
};

// 初始化 Firebase 應用程式
const app = initializeApp(firebaseConfig);

// 初始化並匯出服務實例
export const auth = getAuth(app);
export const db = getFirestore(app);

// 匯出 Google 登入供應商
export const googleProvider = new GoogleAuthProvider();

// 統一匯出所有 Firestore 函式，方便在其他地方使用
export { 
    doc, 
    setDoc, 
    getDoc,
    updateDoc,
    onSnapshot, 
    runTransaction, 
    collection, 
    addDoc, 
    writeBatch,
    serverTimestamp,
    query,
    where,
    getDocs
};

// 重新匯出 FirebaseAuthUser 類型
export type { FirebaseAuthUser };


// === 模擬器設定 (開發環境專用) ===
if (window.location.hostname === "localhost") {
    console.log("Connecting to Firebase Emulators: Auth (9099), Firestore (8080)...");
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFirestoreEmulator(db, "localhost", 8080);
}