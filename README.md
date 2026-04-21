# SkyHub Print Center

Reusable premium print layout for SkyHub exports.

## Install

```bash
pnpm add @deltaoga/skyhub-print-center@github:deltaoga/skyhub-print-center#v1.0.0
```

## Exported API

- `PrintCenterLayout`
- `buildPrintDocumentCode`
- `PrintCenterLayoutProps`
- `PrintChipTone`
- `PrintSummaryChip`

## Usage

```tsx
import { PrintCenterLayout, buildPrintDocumentCode } from "@deltaoga/skyhub-print-center";

export default function Example() {
  const printedAt = new Date();

  return (
    <PrintCenterLayout
      scriptId="print-example"
      documentTitle="Contoh Laporan"
      documentSubtitle="Dokumen print premium"
      printedAtLabel={printedAt.toISOString()}
      summaryTitle="Ringkasan"
      summarySubtitle="Contoh data"
      summaryChips={[{ label: "10 TOTAL", tone: "info" }]}
      documentCode={buildPrintDocumentCode("EXAMPLE", printedAt)}
      brandMarkSrc="/skyhub-mark-blue.svg"
    >
      <section className="print-table-wrap">
        <table className="print-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Item Demo</td>
            </tr>
          </tbody>
        </table>
      </section>
    </PrintCenterLayout>
  );
}
```

## Notes

- Default logo path is `/skyhub-mark-blue.svg`.
- If your app uses a different asset path, pass `brandMarkSrc` explicitly.
- Layout triggers `window.print()` automatically when page load completes.
