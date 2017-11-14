const getExperimentMarkup = (id, urls) => {
  urls = urls.split('\n').map(url => `      <${url}>`).join(",\n");

  return `@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.

<http://linked.opendata.cz/ldcp/resource/ldvm/experiment/${id}/config> a <http://linked.opendata.cz/ldcp/resource/discovery/input> ;
    <http://linked.opendata.cz/ldcp/property/hasTemplate> 
${urls}
    .

<http://linked.opendata.cz/ldcp/resource/ldvm/experiment/${id}/config> 
    <http://linked.opendata.cz/ldcp/property/hasTemplate> 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---202.45.139.84-10035-catalogs-fao-repositories-agrovoc> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---apps.morelab.deusto.es-labman-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---commons.dbpedia.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---crtm.linkeddata.es-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---data.aalto.fi-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---data.allie.dbcls.jp-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---data.hnm.hu-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---data.logainm.ie-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---data.nobelprize.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---data.oceandrilling.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---data.open.ac.uk-query> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---data.rism.info-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---data.utpl.edu.ec-ecuadorresearch-lod-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---data.utpl.edu.ec-utpl-lod-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---dati.isprambiente.it-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---de.dbpedia.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---edit.elte.hu-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---en.openei.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---enipedia.tudelft.nl-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---environment.data.gov.uk-sparql-bwq-query> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---es.dbpedia.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---eu.dbpedia.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---extbi.lab.aau.dk-sparql-> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---farolas.linkeddata.es-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---fr.dbpedia.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---id.sgcb.mcu.es-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---ja.dbpedia.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---ldf.fi-ww1lod-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---linked.opendata.cz-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---linkedarc.net-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---linkeddata.es-resource-ldqm-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---linkedgeodata.org-sparql-> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---linkedspending.aksw.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---live.dbpedia.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---lod.euscreen.eu-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---lod.xdams.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---lodstats.aksw.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---nl.dbpedia.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---opendata.caceres.es-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---opendata.caceres.es-sparql-> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---opendatacommunities.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---premon.fbk.eu-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---pt.dbpedia.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---rdf.disgenet.org-sparql-> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---ruian.linked.opendata.cz-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---serendipity.utpl.edu.ec-lod-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---services.data.gov.uk-education-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---services.data.gov.uk-reference-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---services.data.gov.uk-statistics-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---sparql.odw.tw> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---sparql.orthodb.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---statistics.data.gov.uk-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---vocabularies.unesco.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---webenemasuno.linkeddata.es-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---wikidata.dbpedia.org-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---www.imagesnippets.com-sparql-images> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---www.influencetracker.com-8890-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---www.linklion.org-8890-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---www.lotico.com-3030-lotico-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---www.rechercheisidore.fr-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/http---zbw.eu-beta-sparql-stw-query> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/https---linked.opendata.cz-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/https---nkod.opendata.cz-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/https---ruian.linked.opendata.cz-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/https---w3id.org-scholarlydata-sparql> , 
      <https://linked.opendata.cz/ldcp/resource/lod/templates/https---www.europeandataportal.eu-sparql> .`;
};

export default getExperimentMarkup;