import { type ReactNode } from "react";
export type PrintChipTone = "success" | "info" | "warning" | "danger" | "neutral";
export type PrintSummaryChip = {
    label: string;
    tone?: PrintChipTone;
};
export type PrintCenterLayoutProps = {
    scriptId: string;
    documentTitle: string;
    documentSubtitle: string;
    printedAtLabel: string;
    filterSummary?: string;
    summaryTitle: string;
    summarySubtitle: string;
    summaryChips: PrintSummaryChip[];
    documentCode: string;
    brandMarkSrc?: string;
    children: ReactNode;
};
export declare function buildPrintDocumentCode(prefix: string, date?: Date): string;
export declare function PrintCenterLayout({ scriptId, documentTitle, documentSubtitle, printedAtLabel, filterSummary, summaryTitle, summarySubtitle, summaryChips, documentCode, brandMarkSrc, children, }: PrintCenterLayoutProps): import("react/jsx-runtime").JSX.Element;
