"use client";
import { Block3r } from "block3d";
import { block3dConfig } from "../../block3d.config";
import { config } from "../../wagmi.config";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Block3r block3dConfig={block3dConfig} wagmiConfig={config}>
          {children}
        </Block3r>
      </body>
    </html>
  );
}
