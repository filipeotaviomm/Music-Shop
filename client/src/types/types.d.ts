import React from "react";
import { FieldError } from "react-hook-form";


interface IllustrationCardProps {
  image: string;
  title: string;
  description: string;
}
interface ProductCardProps {
  image: string;
  name: string;
  brand: string;
  price: number;
}

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
  type?: string;
  label: string;
  id: string;
}


