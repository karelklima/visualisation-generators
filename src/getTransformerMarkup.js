const getTransformerMarkup = ({ id, inputVocabulary, inputPredicate, outputVocabulary, outputPredicate, query, descriptor }) => 
`@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

@prefix lpd:       <https://discovery.linkedpipes.com/vocabulary/> .

@prefix transformer:  <https://discovery.linkedpipes.com/resource/transformer/${id}/> .
@prefix configuration-vocabulary:  <https://discovery.linkedpipes.com/vocabulary/transformer/${id}/configuration/> .

transformer:template a lpd:TransformerTemplate ;
  dcterms:title "${inputVocabulary} ${inputPredicate} to ${outputVocabulary} ${outputPredicate}"@en;
  lpd:componentConfigurationTemplate transformer:defaultConfiguration ;
  lpd:inputTemplate transformer:input ;
  lpd:outputTemplate transformer:output ;
  lpd:feature transformer:feature .
  
configuration-vocabulary:Configuration a rdfs:Class ;
  rdfs:label "Class of configurations of ${inputVocabulary} ${inputPredicate} to ${outputVocabulary} ${outputPredicate}"@en;
  rdfs:subClassOf lpd:ComponentConfiguration .
  
transformer:defaultConfiguration a configuration-vocabulary:Configuration ;
  dcterms:title "Default configuration" ;
  lpd:query  """
${query}
  """ ;
  lpd:configurationQuery """
    PREFIX dcterms: <http://purl.org/dc/terms/>
    PREFIX lpd: <https://discovery.linkedpipes.com/vocabulary/>
    PREFIX configuration-vocabulary: <https://discovery.linkedpipes.com/vocabulary/transformer/${id}/configuration/>
    
    CONSTRUCT {
      ?config a configuration-vocabulary:Configuration ;
        lpd:query ?query ;
        dcterms:title ?title .
    } WHERE {
      ?config a configuration-vocabulary:Configuration .
      OPTIONAL { ?config lpd:query ?query . }
      OPTIONAL { ?config dcterms:title ?title . }
    }
  """ .

transformer:input a lpd:InputDataPortTemplate ;
  dcterms:title "Triples with ${inputVocabulary} ${inputPredicate} predicate" .
  
transformer:output a lpd:OutputDataPortTemplate ;
  dcterms:title "Representation of objects of the input triples expressed as ${outputVocabulary} triples" .
  
transformer:feature a lpd:MandatoryFeature ;
  dcterms:title "Transforms ${inputVocabulary} ${inputPredicate} to ${outputVocabulary} ${outputPredicate}" ;
  lpd:descriptor transformer:descriptor .
  
transformer:descriptor a lpd:Descriptor ;
  lpd:query """
${descriptor}
  """ ;
  lpd:appliesTo transformer:input .`;

export default getTransformerMarkup;