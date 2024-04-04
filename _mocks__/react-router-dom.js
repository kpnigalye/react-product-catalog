import React from "react";

// mock: Link
const MockLink = ({ to, children }) => {
  return <a href={to}>{children}</a>;
};

// mock: useNavigate

const mockNavigate = jest.fn();

const useNavigate = () => {
  return mockNavigate;
};

export { useNavigate, mockNavigate, MockLink };
