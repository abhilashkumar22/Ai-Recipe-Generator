import React from 'react';
import Card from './Card';

const ErrorMessage = ({ message }) => (
  <Card className="bg-red-100 border border-red-400 text-red-700">
    <div className="p-6 text-center">
      <h3 className="font-bold mb-2">Oops! Something went wrong.</h3>
      <p>{message}</p>
    </div>
  </Card>
);

export default ErrorMessage;