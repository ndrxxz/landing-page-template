import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  data: Record<string, unknown>;
}

function StructuredData({ data }: StructuredDataProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
}

export default StructuredData;
