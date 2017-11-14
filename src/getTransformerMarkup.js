const getTransformerMarkup = ({ id, title, query, descriptor, inputTitle, outputTitle }) => 
`@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

@prefix ldvm:       <http://linked.opendata.cz/ontology/ldvm/> .

@prefix transformer:  <http://linked.opendata.cz/ldcp/resource/ldvm/transformer/${id}/> .
@prefix configuration-vocabulary:  <http://linked.opendata.cz/vocabulary/ldvm/transformer/${id}/configuration/> .

transformer:template a ldvm:TransformerTemplate ;
  dcterms:title "${title}"@en;
  ldvm:componentConfigurationTemplate transformer:defaultConfiguration ;
  ldvm:inputTemplate transformer:input ;
  ldvm:outputTemplate transformer:output ;
  ldvm:feature transformer:feature .
  
configuration-vocabulary:Configuration a rdfs:Class ;
  rdfs:label "Class of configurations of ${title}"@en;
  rdfs:subClassOf ldvm:ComponentConfiguration .
  
transformer:defaultConfiguration a configuration-vocabulary:Configuration ;
  dcterms:title "Default configuration" ;
  ldvm:query  """
${query}
  """ ;
  ldvm:configurationQuery """
    PREFIX dcterms: <http://purl.org/dc/terms/>
    PREFIX ldvm: <http://linked.opendata.cz/ontology/ldvm/>
    PREFIX configuration-vocabulary: <http://linked.opendata.cz/vocabulary/ldvm/transformer/${id}/configuration/>
    
    CONSTRUCT {
      ?config a configuration-vocabulary:Configuration ;
        ldvm:query ?query ;
        dcterms:title ?title .
    } WHERE {
      ?config a configuration-vocabulary:Configuration .
      OPTIONAL { ?config ldvm:query ?query . }
      OPTIONAL { ?config dcterms:title ?title . }
    }
  """ .

transformer:input a ldvm:InputDataPortTemplate ;
  dcterms:title "${inputTitle}" .
  
transformer:output a ldvm:OutputDataPortTemplate ;
  dcterms:title "${outputTitle}" .
  
transformer:feature a ldvm:MandatoryFeature ;
  dcterms:title "Transforms ${title}" ;
  ldvm:descriptor transformer:descriptor .
  
transformer:descriptor a ldvm:Descriptor ;
  ldvm:query """
${descriptor}
  """ ;
  ldvm:appliesTo transformer:input .`;

export default getTransformerMarkup;