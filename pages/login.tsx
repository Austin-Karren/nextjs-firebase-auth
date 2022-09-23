import React, { useState } from 'react';
import firebaseClient from '../firebaseClient';
import styles from "../styles/Home.module.css";
import { getAuth } from 'firebase/auth';
import type { NextPage } from 'next';
import { useAuth } from '../auth';

const Login: NextPage = () => {
  const { user } = useAuth();
  firebaseClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <main className={styles.container}>
      <div className={styles.heading}>
        <h1>Login page</h1>
        <p>{`User ID: ${user.keys ? user.id : "No user signed in"}`}</p>
      </div>
    </main>
  )
}

export default Login;