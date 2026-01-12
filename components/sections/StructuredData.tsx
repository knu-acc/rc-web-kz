import { generateLocalBusinessSchema, generateWebSiteSchema, generateOrganizationSchema } from '@/lib/schema'

export function StructuredData() {
  const localBusiness = generateLocalBusinessSchema()
  const webSite = generateWebSiteSchema()
  const organization = generateOrganizationSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  )
}
