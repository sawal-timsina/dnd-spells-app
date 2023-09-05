interface SpellCommon {
  index: string;
  name: string;
  url: string;
}

export interface Spell extends SpellCommon {}

export interface SpellDetails extends Spell {
  attack_type: string;
  casting_time: string;
  classes: SpellCommon[];
  components: string[];
  concentration: boolean;
  damage?: {
    damage_at_character_level: {
      [key: number]: string;
    };
    damage_type: SpellCommon;
  };
  dc: {
    dc_success: string;
    dc_type: SpellCommon;
  };
  desc: string[];
  duration: string;
  higher_level: string[];
  level: number;
  range: string;
  ritual: boolean;
  school: SpellCommon;
  subclasses: SpellCommon[];
}
