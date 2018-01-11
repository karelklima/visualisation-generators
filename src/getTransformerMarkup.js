const getTransformerMarkup = ({ id, inputVocabulary, inputPredicate, outputVocabulary, outputPredicate, query, descriptor }) => 
`@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

@prefix ldcp:       <https://linked.opendata.cz/vocabulary/ldcp/> .

@prefix transformer:  <https://linked.opendata.cz/ldcp/resource/transformer/${id}/> .
@prefix configuration-vocabulary:  <https://linked.opendata.cz/ldcp/vocabulary/transformer/${id}/configuration/> .

transformer:template a ldcp:TransformerTemplate ;
  dcterms:title "${inputVocabulary} ${inputPredicate} to ${outputVocabulary} ${outputPredicate}"@en;
  ldcp:componentConfigurationTemplate transformer:defaultConfiguration ;
  ldcp:inputTemplate transformer:input ;
  ldcp:outputTemplate transformer:output ;
  ldcp:feature transformer:feature .
  
configuration-vocabulary:Configuration a rdfs:Class ;
  rdfs:label "Class of configurations of ${inputVocabulary} ${inputPredicate} to ${outputVocabulary} ${outputPredicate}"@en;
  rdfs:subClassOf ldcp:ComponentConfiguration .
  
transformer:defaultConfiguration a configuration-vocabulary:Configuration ;
  dcterms:title "Default configuration" ;
  ldcp:query  """
${query}
  """ ;
  ldcp:configurationQuery """
    PREFIX dcterms: <http://purl.org/dc/terms/>
    PREFIX ldcp: <https://linked.opendata.cz/vocabulary/ldcp/>
    PREFIX configuration-vocabulary: <https://linked.opendata.cz/ldcp/vocabulary/transformer/${id}/configuration/>
    
    CONSTRUCT {
      ?config a configuration-vocabulary:Configuration ;
        ldcp:query ?query ;
        dcterms:title ?title .
    } WHERE {
      ?config a configuration-vocabulary:Configuration .
      OPTIONAL { ?config ldcp:query ?query . }
      OPTIONAL { ?config dcterms:title ?title . }
    }
  """ .

transformer:input a ldcp:InputDataPortTemplate ;
  dcterms:title "Triples with ${inputVocabulary} ${inputPredicate} predicate" .
  
transformer:output a ldcp:OutputDataPortTemplate ;
  dcterms:title "Representation of objects of the input triples expressed as ${outputVocabulary} triples" .
  
transformer:feature a ldcp:MandatoryFeature ;
  dcterms:title "Transforms ${inputVocabulary} ${inputPredicate} to ${outputVocabulary} ${outputPredicate}" ;
  ldcp:descriptor transformer:descriptor .
  
transformer:descriptor a ldcp:Descriptor ;
  ldcp:query """
${descriptor}
  """ ;
  ldcp:appliesTo transformer:input .`;

export default getTransformerMarkup;