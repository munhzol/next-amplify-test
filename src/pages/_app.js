import "@/styles/globals.css";
import TodoProvider from "todo/context";

export default function App({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
}
