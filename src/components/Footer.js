import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import md5 from '../services/md5-service'

export default function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        allFooterYaml {
          nodes {
            links {
              direction
              label
              link_external
              link_file
              link_internal
            }
            header
          }
        }
        allNetworkYaml(sort: { fields: title, order: ASC }) {
          nodes {
            color
            title
            link
          }
        }
      }
    `
  )

  const social = JSON.parse(`
    [
      {
        "icon_code": "<svg width=\\\"32\\\" height=\\\"26\\\" viewBox=\\\"0 0 32 26\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n<path d=\\\"M31.6901 3C30.5351 3.525 29.2901 3.87 28.0001 4.035C29.3201 3.24 30.3401 1.98 30.8201 0.465C29.5751 1.215 28.1951 1.74 26.7401 2.04C25.5551 0.75 23.8901 0 22.0001 0C18.4751 0 15.5951 2.88 15.5951 6.435C15.5951 6.945 15.6551 7.44 15.7601 7.905C10.4201 7.635 5.66506 5.07 2.50006 1.185C1.94506 2.13 1.63006 3.24 1.63006 4.41C1.63006 6.645 2.75506 8.625 4.49506 9.75C3.43006 9.75 2.44006 9.45 1.57006 9C1.57006 9 1.57006 9 1.57006 9.045C1.57006 12.165 3.79006 14.775 6.73006 15.36C6.19006 15.51 5.62006 15.585 5.03506 15.585C4.63006 15.585 4.22506 15.54 3.83506 15.465C4.64506 18 7.00006 19.89 9.83506 19.935C7.64506 21.675 4.87006 22.695 1.84006 22.695C1.33006 22.695 0.820059 22.665 0.310059 22.605C3.16006 24.435 6.55006 25.5 10.1801 25.5C22.0001 25.5 28.4951 15.69 28.4951 7.185C28.4951 6.9 28.4951 6.63 28.4801 6.345C29.7401 5.445 30.8201 4.305 31.6901 3Z\\\" fill=\\\"white\\\"/>\\r\\n</svg>\\r\\n",
        "label": "Twitter",
        "link": "https://twitter.com/GETDWeb"
      },
      {
        "icon_code": "<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\" standalone=\\\"no\\\"?>\\r\\n<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\"><g fill=\\\"none\\\" fill-rule=\\\"evenodd\\\"><g><g><path d=\\\"M0 0H24V24H0z\\\" transform=\\\"translate(-255 -166) translate(255 166)\\\"/><g fill=\\\"#FFF\\\"><path d=\\\"M13.533 6.996c0 3.865-3.03 6.997-6.767 6.997C3.03 13.993 0 10.86 0 6.996 0 3.132 3.03 0 6.766 0c3.737 0 6.767 3.132 6.767 6.996M20.955 6.996c0 3.638-1.514 6.586-3.383 6.586-1.868 0-3.383-2.948-3.383-6.586 0-3.637 1.515-6.586 3.383-6.586 1.869 0 3.383 2.95 3.383 6.586M23.991 6.996c0 3.26-.532 5.901-1.19 5.901-.656 0-1.19-2.642-1.19-5.9 0-3.26.534-5.901 1.19-5.901.658 0 1.19 2.642 1.19 5.9\\\" transform=\\\"translate(-255 -166) translate(255 166) translate(0 5)\\\"/></g></g></g></g></svg>",
        "label": "Medium",
        "link": "https://medium.com/decentralized-web"
      },
      {
        "icon_code": "<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\" standalone=\\\"no\\\"?>\\r\\n<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 380 380\\\"><defs><style>.cls-1{fill:white;}</style></defs><g id=\\\"LOGO\\\"><path class=\\\"cls-1\\\" d=\\\"M282.83,170.73l-.27-.69-26.14-68.22a6.81,6.81,0,0,0-2.69-3.24,7,7,0,0,0-8,.43,7,7,0,0,0-2.32,3.52l-17.65,54H154.29l-17.65-54A6.86,6.86,0,0,0,134.32,99a7,7,0,0,0-8-.43,6.87,6.87,0,0,0-2.69,3.24L97.44,170l-.26.69a48.54,48.54,0,0,0,16.1,56.1l.09.07.24.17,39.82,29.82,19.7,14.91,12,9.06a8.07,8.07,0,0,0,9.76,0l12-9.06,19.7-14.91,40.06-30,.1-.08A48.56,48.56,0,0,0,282.83,170.73Z\\\"/></g></svg>",
        "label": "GitLab",
        "link": "https://gitlab.com/getdweb"
      },
      {
        "icon_code": "<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\r\\n<svg width=\\\"24px\\\" height=\\\"24px\\\" viewBox=\\\"0 0 24 24\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\">\\r\\n    <title>matrix</title>\\r\\n    <g id=\\\"&gt;&gt;&gt;-microinteractions-dev\\\" stroke=\\\"none\\\" stroke-width=\\\"1\\\" fill=\\\"none\\\" fill-rule=\\\"evenodd\\\">\\r\\n        <g id=\\\"microinteractiions\\\" transform=\\\"translate(-417.000000, -166.000000)\\\">\\r\\n            <g id=\\\"matrix\\\" transform=\\\"translate(417.000000, 166.000000)\\\">\\r\\n                <rect id=\\\"Bounds\\\" x=\\\"0\\\" y=\\\"0\\\" width=\\\"24\\\" height=\\\"24\\\"></rect>\\r\\n                <g id=\\\"matrix-logo-white-copy\\\" transform=\\\"translate(1.000000, 0.000000)\\\" fill=\\\"#FFFFFF\\\" fill-rule=\\\"nonzero\\\">\\r\\n                    <polygon id=\\\"Path\\\" points=\\\"0.702236093 0.549151335 0.702236093 23.4371751 2.34706858 23.4371751 2.34706858 23.9863264 0.0710414032 23.9863264 0.0710414032 7.12166172e-05 2.34706858 7.12166172e-05 2.34706858 0.549151335\\\"></polygon>\\r\\n                    <path d=\\\"M7.03928572,7.80498518 L7.03928572,8.96325225 L7.07221081,8.96325225 C7.3806969,8.52235013 7.7522598,8.18001187 8.18753948,7.93730565 C8.62253475,7.6950267 9.1211757,7.5733887 9.68282235,7.5733887 C10.2224242,7.5733887 10.7154473,7.67843325 11.1614649,7.88781007 C11.6076248,8.097543 11.9464049,8.4668724 12.1777339,8.99643915 C12.4308944,8.6214837 12.775079,8.29046888 13.2103587,8.00367953 C13.645354,7.71703268 14.1602797,7.5733887 14.7552071,7.5733887 C15.2068426,7.5733887 15.6251975,7.62865283 16.0110541,7.73896732 C16.3963417,7.8492819 16.7268015,8.02575668 17.0022203,8.26839172 C17.2773546,8.51124037 17.4921144,8.82836798 17.6466419,9.21963202 C17.8007427,9.61160828 17.877971,10.0829199 17.877971,10.634635 L17.877971,16.359454 L15.5316846,16.359454 L15.5316846,11.5113828 C15.5316846,11.2247359 15.5207332,10.9544689 15.4986172,10.7005816 C15.476359,10.4470504 15.4160556,10.2265638 15.3169248,10.0387656 C15.2177228,9.85139467 15.0715866,9.70233825 14.879085,9.5919525 C14.686299,9.48206528 14.424605,9.42658755 14.0942162,9.42658755 C13.7638274,9.42658755 13.4966577,9.49039762 13.2928492,9.61680712 C13.0888985,9.74385757 12.9293221,9.9094362 12.8137642,10.1132582 C12.6981352,10.3175786 12.6209782,10.5491038 12.5825063,10.8084748 C12.54375,11.0675608 12.5246207,11.329638 12.5246207,11.5943501 L12.5246207,16.359454 L10.1785477,16.359454 L10.1785477,11.5612344 C10.1785477,11.3075608 10.1727876,11.0565223 10.1621918,10.8084748 C10.1509561,10.5601424 10.1043062,10.3313234 10.0215313,10.1215905 C9.93889853,9.91221368 9.8011536,9.74385757 9.6084387,9.61680712 C9.41565262,9.49039762 9.13205595,9.42658755 8.75757743,9.42658755 C8.6472819,9.42658755 8.50135905,9.4514421 8.3198088,9.50122253 C8.13804518,9.55086053 7.96168612,9.64479525 7.79108723,9.782457 C7.62013275,9.92047477 7.47435209,10.1190267 7.35317636,10.3780415 C7.23192952,10.6374124 7.17141277,10.9764035 7.17141277,11.3955133 L7.17141277,16.359454 L4.82541087,16.359454 L4.82541087,7.80498518 L7.03928572,7.80498518 Z\\\" id=\\\"Path\\\"></path>\\r\\n                    <polygon id=\\\"Path\\\" points=\\\"21.8203777 23.4371751 21.8203777 0.549151335 20.1755452 0.549151335 20.1755452 7.12166172e-05 22.4517146 7.12166172e-05 22.4517146 23.9863264 20.1755452 23.9863264 20.1755452 23.4371751\\\"></polygon>\\r\\n                </g>\\r\\n            </g>\\r\\n        </g>\\r\\n    </g>\\r\\n</svg>",
        "label": "Matrix",
        "link": "https://matrix.to/#/!WBhcGXTDMlzyTPWoJv:matrix.org?via=matrix.org&via=tomesh.net&via=privacytools.io"
      },
      {
        "icon_code": "<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\" standalone=\\\"no\\\"?><svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\"><g fill=\\\"none\\\" fill-rule=\\\"evenodd\\\"><g><g><g><path d=\\\"M0 0H24V24H0z\\\" transform=\\\"translate(-363 -100) translate(363 100)\\\"/></g><g fill=\\\"#FFF\\\"><path d=\\\"M7 0H9V16H7z\\\" transform=\\\"translate(-363 -100) translate(363 100) translate(4 4)\\\"/><path d=\\\"M0 7H16V9H0z\\\" transform=\\\"translate(-363 -100) translate(363 100) translate(4 4)\\\"/></g></g></g></g></svg>",
        "label": "Plus",
        "link": "https://twitter.com/GETDWeb/status/1359167211001303043"
      }
    ]`
  )

  var options = data.allFooterYaml.nodes
  const cities = data.allNetworkYaml.nodes

  let social_links_last_3 = []
  if (social.length >= 7) {
    social_links_last_3 = social.slice(Math.max(social.length - 3, 0))
    social = social.slice(0, Math.max(social.length - 3, 0))
  }

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="d-xl-inline-block footer__left">
              <div
                className="footer__text"
                dangerouslySetInnerHTML={{
                  __html:
                    'DWeb is a global network of builders and dreamers working to create a better, decentralized web.<br />\r\nThe web we want and deserve.',
                }}
              ></div>

              <div className="footer__social d-none d-md-inline-block">
                <div>
                  {social.map((item) => (
                    <a
                      className="footer__social-item"
                      href={item.link}
                      target="_blank"
                      key={md5(item.label)}
                      dangerouslySetInnerHTML={{ __html: item.icon_code }}
                    ></a>
                  ))}
                </div>
                <div>
                  {social_links_last_3.map((item) => (
                    <a
                      className="footer__social-item"
                      href={item.link}
                      target="_blank"
                      key={md5(item.label)}
                      dangerouslySetInnerHTML={{ __html: item.icon_code }}
                    ></a>
                  ))}
                </div>
              </div>
            </div>

            <div className="d-xl-inline-block footer__right">
              <div className="footer__network-nodes-header">Network nodes:</div>
              <div className="footer__network-nodes">
                {cities.map((city) => (
                  <a
                    className="footer__network-nodes-item"
                    href={city.link}
                    target="_blank"
                    style={{ color: city.color }}
                    key={md5(city.title)}
                  >
                    {city.title}
                  </a>
                ))}
                <a
                  className="footer__network-nodes-bottom-link"
                  href="/start-a-dweb-node/"
                  target="_blank"
                >
                  Open chapter in your city
                </a>
              </div>

              <div className="footer__social d-md-none">
                <div>
                  {social.map((item) => (
                    <a
                      className="footer__social-item"
                      href={item.link}
                      target="_blank"
                      key={md5(item.label)}
                      dangerouslySetInnerHTML={{ __html: item.icon_code }}
                    ></a>
                  ))}
                </div>
                <div>
                  {social_links_last_3.map((item) => (
                    <a
                      className="footer__social-item"
                      href={item.link}
                      target="_blank"
                      key={md5(item.label)}
                      dangerouslySetInnerHTML={{ __html: item.icon_code }}
                    ></a>
                  ))}
                </div>
              </div>
              <div className="footer__menus">
                {options.map((block) => (
                  <div className="footer__menu" key={md5(block.header)}>
                    <div className="footer__menu-header">{block.header}</div>
                    {block.links.map((item) => {
                      if (item.direction == 'internal')
                        return (
                          <Link
                            className="footer__menu-link"
                            to={item.link_internal}
                            key={md5(item.label)}
                          >
                            {item.label}
                          </Link>
                        )
                      if (item.direction == 'file' && item.link_file !== null)
                        return (
                          <a
                            className="footer__menu-link"
                            href={item.link_file}
                            target="_blank"
                            key={md5(item.label)}
                          >
                            {item.label}
                          </a>
                        )
                      if (item.direction == 'external')
                        return (
                          <a
                            className="footer__menu-link"
                            href={item.link_external}
                            target="_blank"
                            key={md5(item.label)}
                          >
                            {item.label}
                          </a>
                        )
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="footer__bottom">
              <div className="footer__menuline">
                <a
                  className="footer__menuline-item"
                  href="/privacy-policy"
                  target="_blank"
                  key={md5('Privacy policy')}
                >
                  Privacy policy
                </a>
                <a
                  className="footer__menuline-item"
                  href="https://form.jotform.com/210875439674164"
                  target="_blank"
                  key={md5('Report a bug')}
                >
                  Report a bug
                </a>
              </div>
              <div
                className="footer__copyright"
                dangerouslySetInnerHTML={{
                  __html: `${new Date().getFullYear()} View this website on <a href=\"ipns://getdweb.net\">IPFS</a> and <a href=\"hyper://4392a5062f7bf93c26543ca7a85a009b4e568117d107f31788676377e7b4ef45\">Hypercore</a>.`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
