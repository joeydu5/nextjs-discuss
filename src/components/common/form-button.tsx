"use client";

import { Button } from "@nextui-org/react";

interface FormButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

import React from "react";

const FormButton = ({ children, isLoading }: FormButtonProps) => {
  return (
    <div>
      <Button type="submit" isLoading={isLoading}>
        {children}
      </Button>
    </div>
  );
};

export default FormButton;
