# React useEffect Runs on Every Render

This repository demonstrates a common issue with the React `useEffect` hook: unintentional execution on every render. The issue is caused by an incorrect dependency array.  The provided solution fixes the problem, preventing unnecessary re-renders and improving performance.

## Problem

The `useEffect` hook in `bug.js` logs to the console on every render, regardless of state changes.  This is inefficient and can lead to performance degradation for complex components.

## Solution

The `bugSolution.js` file demonstrates the correct usage of the `useEffect` hook.  By including `count` in the dependency array, the effect only executes when the value of `count` changes, resolving the issue.