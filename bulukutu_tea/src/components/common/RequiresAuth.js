import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RequiresAuth({
  user,
  children
}) {
  return (
    user ? children : <Navigate to="/login" />
  )
}
