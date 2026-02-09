import { generateLocalBusinessSchema, generateWebSiteSchema, generateOrganizationSchema } from '@/lib/schema'

export function StructuredData() {
  const localBusiness = generateLocalBusinessSchema()
  const webSite = generateWebSiteSchema()
  const organization = generateOrganizationSchema()

  return (
    <>
      <script
        key="ld-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        key="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        key="ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  )
}
